import { SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedResource } from "./embeddedresource";
/**
 * Success
 */
export declare class Action extends SpeakeasyBase {
    actionDetails?: EmbeddedResource;
    cadence?: EmbeddedResource;
    /**
     * Datetime of when the Action was created
     */
    createdAt?: Date;
    /**
     * Whether this step is due
     */
    due?: boolean;
    /**
     * When action is due
     */
    dueOn?: Date;
    /**
     * ID of Action
     */
    id?: number;
    /**
     * ID of the multitouch group
     */
    multitouchGroupId?: number;
    person?: EmbeddedResource;
    /**
     * The current state of the person on the cadence. Possible values are:
     *
     * @remarks
     *
     * in_progress: this action has not been completed
     *
     * pending_activity: this action has been acted upon, but the action has not been completed.
     * (i.e. the email is scheduled to send, but has not been delivered yet)
     *
     */
    status?: string;
    step?: EmbeddedResource;
    /**
     * The type of this action. Valid types are: email, phone, other. New types may be added in the future.
     *
     * @remarks
     *
     */
    type?: string;
    /**
     * Datetime of when the Action was last updated
     */
    updatedAt?: Date;
    user?: EmbeddedResource;
}
