/**
 * * lightning - fast simple scan
 *
 * @remarks
 * * normal - default profile
 * * full - does everything the default profile does and adds boolean based
 * SQL injection tests
 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
 * and tries fewer payloads for SQL injection tests
 *
 */
export declare enum ScanProfileEnum {
    Safe = "safe",
    Normal = "normal",
    Full = "full",
    Lightning = "lightning"
}
