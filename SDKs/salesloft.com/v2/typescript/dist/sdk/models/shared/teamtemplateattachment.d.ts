import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
export declare class TeamTemplateAttachment extends SpeakeasyBase {
    /**
     * The size of the attachment
     */
    attachmentFileSize?: number;
    /**
     * ID of the team template attachment
     */
    attachmentId?: number;
    /**
     * Download url of the attachment
     */
    downloadUrl?: string;
    /**
     * ID of team template attachment association
     */
    id?: number;
    /**
     * Name of the attachment
     */
    name?: string;
    teamTemplate?: EmbeddedResource;
}
