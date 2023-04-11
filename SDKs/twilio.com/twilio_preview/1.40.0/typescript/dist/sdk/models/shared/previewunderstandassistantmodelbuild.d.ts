import { SpeakeasyBase } from "../../../internal/utils";
import { ModelBuildEnumStatusEnum } from "./modelbuildenumstatusenum";
/**
 * Created
 */
export declare class PreviewUnderstandAssistantModelBuild extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Model Build.
     */
    accountSid?: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid?: string;
    /**
     * The time in seconds it took to build the model.
     */
    buildDuration?: number;
    /**
     * The date that this resource was created
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated
     */
    dateUpdated?: Date;
    errorCode?: number;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    status?: ModelBuildEnumStatusEnum;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName?: string;
    url?: string;
}
