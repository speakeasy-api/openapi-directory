import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAnAccountParameters extends SpeakeasyBase {
    /**
     * The identifier for the Entity that will own the Account.
     */
    entityId?: string;
    /**
     * The identifier of an Entity that, while not owning the Account, is associated with its activity. Its relationship to your group must be `informational`.
     */
    informationalEntityId?: string;
    /**
     * The name you choose for the Account.
     */
    name: string;
}
