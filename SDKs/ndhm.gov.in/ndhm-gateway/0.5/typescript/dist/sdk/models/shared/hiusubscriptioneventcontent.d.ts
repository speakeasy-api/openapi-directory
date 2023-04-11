import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentManagerPatientID } from "./consentmanagerpatientid";
import { EventCategoryDetail } from "./eventcategorydetail";
import { OrganizationRepresentation } from "./organizationrepresentation";
export declare class HIUSubscriptionEventContent extends SpeakeasyBase {
    context: EventCategoryDetail[];
    hip: OrganizationRepresentation;
    patient: ConsentManagerPatientID;
}
