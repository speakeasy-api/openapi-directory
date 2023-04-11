/**
 * The event types to include:
 *
 * @remarks
 *
 * - `web` - returns web (non-Git) events.
 * - `git` - returns Git events.
 * - `all` - returns both web and Git events.
 *
 * The default is `web`.
 */
export declare enum AuditLogIncludeEnum {
    Web = "web",
    Git = "git",
    All = "all"
}
