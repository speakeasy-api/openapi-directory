import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseCrmEventbusProtoBuganizerNotification extends SpeakeasyBase {
    /**
     * Whom to assign the new bug. Optional.
     */
    assigneeEmailAddress?: string;
    /**
     * ID of the buganizer component within which to create a new issue. Required.
     */
    componentId?: string;
    /**
     * ID of the buganizer template to use. Optional.
     */
    templateId?: string;
    /**
     * Title of the issue to be created. Required.
     */
    title?: string;
}
