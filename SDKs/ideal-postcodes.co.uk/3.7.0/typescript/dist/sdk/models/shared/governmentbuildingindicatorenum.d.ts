/**
 * An alphabetic value that identifies the type of government agency at the delivery point and/or whether a firm is the only delivery at an address. For this purpose, "address" is defined as the complete delivery line (e.g., complete street address and, if included as part of the firm record, the secondary abbreviation and/or address secondary number).
 *
 * @remarks
 * - A = City government building—alternates only
 * - B = Federal government building—alternates only
 * - C = State government building—alternates only
 * - D = Firm only—base and alternates
 * - E = City government building and firm only—alternates only
 * - F = Federal government building and firm only—alternates only
 * - G = State government building and firm only—alternates only
 */
export declare enum GovernmentBuildingIndicatorEnum {
    Unknown = "",
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G"
}
