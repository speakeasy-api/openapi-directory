import { SpeakeasyBase } from "../../../internal/utils";
import { ContactInfo } from "./contactinfo";
/**
 * Wrapper message for a list of contact information defining Customer Match audience members.
 */
export declare class ContactInfoList extends SpeakeasyBase {
    /**
     * A list of ContactInfo objects defining Customer Match audience members. The size of members after splitting the contact_infos mustn't be greater than 500,000.
     */
    contactInfos?: ContactInfo[];
}
