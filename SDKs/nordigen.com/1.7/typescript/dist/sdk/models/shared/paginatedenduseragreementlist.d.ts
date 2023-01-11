import { SpeakeasyBase } from "../../../internal/utils";
import { EndUserAgreement } from "./enduseragreement";
export declare class PaginatedEndUserAgreementList extends SpeakeasyBase {
    count?: number;
    next?: string;
    previous?: string;
    results?: EndUserAgreement[];
}
