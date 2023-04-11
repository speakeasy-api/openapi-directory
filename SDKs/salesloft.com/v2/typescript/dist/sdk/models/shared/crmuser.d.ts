import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
export declare class CrmUser extends SpeakeasyBase {
    /**
     * Datetime of when the crm user was created
     */
    createdAt?: Date;
    /**
     * CRM ID
     */
    crmId?: string;
    /**
     * Crm User ID
     */
    id?: number;
    /**
     * Datetime of when the crm user was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
}
