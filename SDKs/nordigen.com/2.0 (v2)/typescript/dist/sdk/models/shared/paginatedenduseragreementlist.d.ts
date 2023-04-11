import { SpeakeasyBase } from "../../../internal/utils";
import { EndUserAgreement } from "./enduseragreement";
/**
 * Retrieve all end user agreements
 */
export declare class PaginatedEndUserAgreementList extends SpeakeasyBase {
    count?: number;
    next?: string;
    previous?: string;
    results?: EndUserAgreement[];
}
