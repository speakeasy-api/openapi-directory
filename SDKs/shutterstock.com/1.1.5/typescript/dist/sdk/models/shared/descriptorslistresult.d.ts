import { SpeakeasyBase } from "../../../internal/utils";
import { Descriptors } from "./descriptors";
/**
 * List Descriptors results
**/
export declare class DescriptorsListResult extends SpeakeasyBase {
    data?: Descriptors[];
    page?: number;
    perPage?: number;
}
