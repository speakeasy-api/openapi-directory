/**
 * Determines how FedEx will pickup your packages
 *
 * @remarks
 *
 * |Pickup Type    | Description
 * |---------------|-----------------------------------------
 * |`vat`          | The tax identifier is a Value Added Tax.
 * |`eori`         | The tax identifier is an Economic Operators Registration and Identification Number (EORI).
 * |`ssn`          | The tax identifier is a Social Security Number.
 * |`ein`          | The tax identifier is an Employer Identification Number (EIN).
 * |`tin`          | The tax identifier is a Tax Identification Number (TIN).
 * |`ioss`         | The tax identifier is an Import One-Stop Shop (IOSS).
 * |`pan`          | The tax identifier is a Permanent Account Number (PAN).
 * |`voec`         | The tax identifier is a Norwegian VAT On E-Commerce(VOEC).
 *
 */
export declare enum IdentifierTypeEnum {
    Vat = "vat",
    Eori = "eori",
    Ssn = "ssn",
    Ein = "ein",
    Tin = "tin",
    Ioss = "ioss",
    Pan = "pan",
    Voec = "voec"
}
