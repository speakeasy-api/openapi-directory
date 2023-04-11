import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Container } from "./googleprivacydlpv2container";
import { GooglePrivacyDlpV2ContentLocation } from "./googleprivacydlpv2contentlocation";
import { GooglePrivacyDlpV2Range } from "./googleprivacydlpv2range";
/**
 * Specifies the location of the finding.
 */
export declare class GooglePrivacyDlpV2Location extends SpeakeasyBase {
    /**
     * Generic half-open interval [start, end)
     */
    byteRange?: GooglePrivacyDlpV2Range;
    /**
     * Generic half-open interval [start, end)
     */
    codepointRange?: GooglePrivacyDlpV2Range;
    /**
     * Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record.
     */
    container?: GooglePrivacyDlpV2Container;
    /**
     * List of nested objects pointing to the precise location of the finding within the file or record.
     */
    contentLocations?: GooglePrivacyDlpV2ContentLocation[];
}
