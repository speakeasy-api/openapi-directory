/**
 * Code that specifies whether a record is a base (preferred) or alternate record.
 *
 * @remarks
 * Base records (represented as "B") can represent a range of addresses or an individual address, such as a firm record, while alternate records (represented as "A") are individual delivery points. Base records are generally preferred over alternate records.
 * Government deliveries will only be listed on alternate records with the appropriate government building indicator (federal, state, or city) set.
 */
export declare enum BaseAlternateCodeEnum {
    A = "A",
    B = "B",
    Unknown = ""
}
