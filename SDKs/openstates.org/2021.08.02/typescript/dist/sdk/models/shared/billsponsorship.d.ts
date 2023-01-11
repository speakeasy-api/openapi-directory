import { SpeakeasyBase } from "../../../internal/utils";
import { CompactPerson } from "./compactperson";
export declare class BillSponsorshipOrganization extends SpeakeasyBase {
    classification: string;
    id: string;
    name: string;
}
export declare class BillSponsorship extends SpeakeasyBase {
    classification: string;
    entityType: string;
    name: string;
    organization?: BillSponsorshipOrganization;
    person?: CompactPerson;
    primary: boolean;
}
