import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
/**
 * List Containers Response.
 */
export declare class ListContainersResponse extends SpeakeasyBase {
    /**
     * All Containers of a GTM Account.
     */
    containers?: Container[];
}
