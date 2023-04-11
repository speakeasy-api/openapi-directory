import { SpeakeasyBase } from "../../../internal/utils";
import { NestedSite } from "./nestedsite";
export declare class TopologyMap extends SpeakeasyBase {
    description?: string;
    /**
     * Identify devices to include in the diagram using regular expressions, one per line. Each line will result in a new tier of the drawing. Separate multiple regexes within a line using semicolons. Devices will be rendered in the order they are defined.
     */
    devicePatterns: string;
    id?: number;
    name: string;
    site: NestedSite;
    slug: string;
}
