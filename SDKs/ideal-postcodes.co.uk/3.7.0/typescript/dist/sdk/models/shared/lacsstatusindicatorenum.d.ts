/**
 * The Locatable Address Conversion Service (LACS) indicator describes records that have been converted to the LACS system (a product/system in a different USPS® product line that allows mailers to identify and convert a rural route address to a city-style address). Rural route and some city addresses are being modified to city-style addresses so that emergency services (e.g., ambulances, police) can find these addresses more efficiently.
 *
 * @remarks
 * - L = LACS address: The old (usually rural-route) address that has been converted for the LACS system.
 * - Blank = Not applicable
 */
export declare enum LacsStatusIndicatorEnum {
    Unknown = "",
    L = "L"
}
