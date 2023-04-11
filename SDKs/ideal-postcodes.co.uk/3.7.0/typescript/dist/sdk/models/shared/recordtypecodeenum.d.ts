/**
 * An alphabetic value that identifies the type of data in the record. - G = General delivery (5-Digit ZIP, ZIP + 4, and Carrier Route products) - H = High-rise (ZIP + 4 only) - F = Firm (ZIP + 4 only) - S = Street (5-Digit ZIP, ZIP + 4, and Carrier Route products) - P = PO Box (5-Digit ZIP, ZIP + 4, and Carrier Route products) - R = Rural route/contract (5-Digit ZIP, ZIP + 4, and Carrier Route products) - M = Multi-carrier (Carrier Route product only)
 */
export declare enum RecordTypeCodeEnum {
    G = "G",
    H = "H",
    F = "F",
    S = "S",
    P = "P",
    R = "R",
    M = "M",
    Unknown = ""
}
