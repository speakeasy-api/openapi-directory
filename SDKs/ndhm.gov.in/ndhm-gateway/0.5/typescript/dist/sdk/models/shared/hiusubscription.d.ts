import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentManagerPatientID } from "./consentmanagerpatientid";
import { HIUSubscriptionContext } from "./hiusubscriptioncontext";
import { OrganizationRepresentation } from "./organizationrepresentation";
export declare class HIUSubscription extends SpeakeasyBase {
    hiu: OrganizationRepresentation;
    id: string;
    patient: ConsentManagerPatientID;
    sources: HIUSubscriptionContext[];
}
