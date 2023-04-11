import { SpeakeasyBase } from "../../../internal/utils";
export declare class NullableCollaboratorPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
/**
 * Collaborator
 */
export declare class NullableCollaborator extends SpeakeasyBase {
    avatarUrl: string;
    email?: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    name?: string;
    nodeId: string;
    organizationsUrl: string;
    permissions?: NullableCollaboratorPermissions;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
