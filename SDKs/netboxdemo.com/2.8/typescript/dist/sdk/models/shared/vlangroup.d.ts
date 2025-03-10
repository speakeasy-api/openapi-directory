import { SpeakeasyBase } from "../../../internal/utils";
import { NestedSite } from "./nestedsite";
export declare class VLANGroup extends SpeakeasyBase {
    description?: string;
    id?: number;
    name: string;
    site?: NestedSite;
    slug: string;
    vlanCount?: number;
}
