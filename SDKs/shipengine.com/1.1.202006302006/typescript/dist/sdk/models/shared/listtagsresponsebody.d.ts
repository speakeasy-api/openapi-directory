import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Response body from a successful GET /tags API call
**/
export declare class ListTagsResponseBody extends SpeakeasyBase {
    tags?: Tag[];
}
