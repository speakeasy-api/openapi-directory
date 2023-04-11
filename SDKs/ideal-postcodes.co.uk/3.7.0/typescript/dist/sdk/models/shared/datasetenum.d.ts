/**
 * Indicates the provenance of an address.
 *
 * @remarks
 *
 *   - `paf` (GBR) Postcode Address File
 *   - `mr` (GBR) Multiple Residence File
 *   - `nyb` (GBR) Not Yet Built File
 *   - `pafa` (GBR) Alias File
 *   - `pafw` (GBR) Welsh File
 *   - `ecaf` (IRL) Eircode ECAF
 *   - `ecad` (IRL) Eircode ECAD
 *   - `usps` (USA) USPS Zip+4
 */
export declare enum DatasetEnum {
    Paf = "paf",
    Pafw = "pafw",
    Pafa = "pafa",
    Mr = "mr",
    Nyb = "nyb",
    Usps = "usps",
    Ecaf = "ecaf",
    Ecad = "ecad"
}
