import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User type.
 */
export declare enum UserTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Human = "HUMAN",
    Bot = "BOT"
}
/**
 * A user in Google Chat.
 */
export declare class UserInput extends SpeakeasyBase {
    /**
     * Unique identifier of the user's Google Workspace domain.
     */
    domainId?: string;
    /**
     * Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `{person_id`} for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API, where the Person `resource_name` is `people/{person_id}`. For example, `users/123456789` in Chat API represents the same person as `people/123456789` in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API.
     */
    name?: string;
    /**
     * User type.
     */
    type?: UserTypeEnum;
}
/**
 * A user in Google Chat.
 */
export declare class User extends SpeakeasyBase {
    /**
     * Output only. The user's display name.
     */
    displayName?: string;
    /**
     * Unique identifier of the user's Google Workspace domain.
     */
    domainId?: string;
    /**
     * Output only. When `true`, the user is deleted or their profile is not visible.
     */
    isAnonymous?: boolean;
    /**
     * Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `{person_id`} for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API, where the Person `resource_name` is `people/{person_id}`. For example, `users/123456789` in Chat API represents the same person as `people/123456789` in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API.
     */
    name?: string;
    /**
     * User type.
     */
    type?: UserTypeEnum;
}
