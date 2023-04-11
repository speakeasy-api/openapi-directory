import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuditLogEventActorLocation extends SpeakeasyBase {
    countryName?: string;
}
export declare class AuditLogEvent extends SpeakeasyBase {
    /**
     * The time the audit log event occurred, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
     */
    atTimestamp?: number;
    /**
     * A unique identifier for an audit event.
     */
    documentId?: string;
    /**
     * The name of the action that was performed, for example `user.login` or `repo.create`.
     */
    action?: string;
    active?: boolean;
    activeWas?: boolean;
    /**
     * The actor who performed the action.
     */
    actor?: string;
    /**
     * The id of the actor who performed the action.
     */
    actorId?: number;
    actorLocation?: AuditLogEventActorLocation;
    /**
     * The username of the account being blocked.
     */
    blockedUser?: string;
    business?: string;
    businessId?: number;
    config?: Record<string, any>[];
    configWas?: Record<string, any>[];
    contentType?: string;
    /**
     * The time the audit log event was recorded, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
     */
    createdAt?: number;
    data?: Record<string, any>;
    deployKeyFingerprint?: string;
    emoji?: string;
    events?: Record<string, any>[];
    eventsWere?: Record<string, any>[];
    explanation?: string;
    fingerprint?: string;
    hookId?: number;
    limitedAvailability?: boolean;
    message?: string;
    name?: string;
    oldUser?: string;
    opensshPublicKey?: string;
    operationType?: string;
    org?: string;
    orgId?: number;
    previousVisibility?: string;
    readOnly?: boolean;
    /**
     * The name of the repository.
     */
    repo?: string;
    /**
     * The name of the repository.
     */
    repository?: string;
    repositoryPublic?: boolean;
    targetLogin?: string;
    team?: string;
    /**
     * The type of protocol (for example, HTTP or SSH) used to transfer Git data.
     */
    transportProtocol?: number;
    /**
     * A human readable name for the protocol (for example, HTTP or SSH) used to transfer Git data.
     */
    transportProtocolName?: string;
    /**
     * The user that was affected by the action performed (if available).
     */
    user?: string;
    userId?: number;
    /**
     * The repository visibility, for example `public` or `private`.
     */
    visibility?: string;
}
