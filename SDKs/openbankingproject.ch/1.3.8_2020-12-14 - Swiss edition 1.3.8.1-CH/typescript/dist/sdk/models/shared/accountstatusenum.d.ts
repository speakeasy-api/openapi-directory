/**
 * Account status. The value is one of the following:
 *
 * @remarks
 *   - "enabled": account is available
 *   - "deleted": account is terminated
 *   - "blocked": account is blocked e.g. for legal reasons
 * If this field is not used, than the account is available in the sense of this specification.
 *
 */
export declare enum AccountStatusEnum {
    Enabled = "enabled",
    Deleted = "deleted",
    Blocked = "blocked"
}
