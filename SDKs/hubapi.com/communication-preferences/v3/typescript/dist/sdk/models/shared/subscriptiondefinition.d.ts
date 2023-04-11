import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubscriptionDefinition extends SpeakeasyBase {
    /**
     * The method or technology used to contact.
     */
    communicationMethod?: string;
    /**
     * Time at which the definition was created.
     */
    createdAt: Date;
    /**
     * A description of the subscription.
     */
    description: string;
    /**
     * The ID of the definition.
     */
    id: string;
    /**
     * Whether the definition is active or archived.
     */
    isActive: boolean;
    /**
     * A subscription definition created by HubSpot.
     */
    isDefault: boolean;
    /**
     * A default description that is used by some HubSpot tools and cannot be edited.
     */
    isInternal: boolean;
    /**
     * The name of the subscription.
     */
    name: string;
    /**
     * The purpose of this subscription or the department in your organization that uses it.
     */
    purpose?: string;
    /**
     * Time at which the definition was last updated.
     */
    updatedAt: Date;
}
