import { SpeakeasyBase } from "../../../internal/utils";
import { NestedSite } from "./nestedsite";
export declare class VLANGroup extends SpeakeasyBase {
    id?: number;
    name: string;
    site?: NestedSite;
    slug: string;
}
