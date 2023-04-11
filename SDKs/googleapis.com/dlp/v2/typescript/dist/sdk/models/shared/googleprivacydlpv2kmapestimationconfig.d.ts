import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2AuxiliaryTable } from "./googleprivacydlpv2auxiliarytable";
import { GooglePrivacyDlpV2TaggedField } from "./googleprivacydlpv2taggedfield";
/**
 * Reidentifiability metric. This corresponds to a risk model similar to what is called "journalist risk" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
 */
export declare class GooglePrivacyDlpV2KMapEstimationConfig extends SpeakeasyBase {
    /**
     * Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers column must appear in exactly one column of one auxiliary table.
     */
    auxiliaryTables?: GooglePrivacyDlpV2AuxiliaryTable[];
    /**
     * Required. Fields considered to be quasi-identifiers. No two columns can have the same tag.
     */
    quasiIds?: GooglePrivacyDlpV2TaggedField[];
    /**
     * ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.
     */
    regionCode?: string;
}
