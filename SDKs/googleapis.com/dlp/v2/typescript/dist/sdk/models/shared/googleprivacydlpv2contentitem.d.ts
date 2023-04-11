import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ByteContentItem } from "./googleprivacydlpv2bytecontentitem";
import { GooglePrivacyDlpV2Table } from "./googleprivacydlpv2table";
export declare class GooglePrivacyDlpV2ContentItem extends SpeakeasyBase {
    /**
     * Container for bytes to inspect or redact.
     */
    byteItem?: GooglePrivacyDlpV2ByteContentItem;
    /**
     * Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more.
     */
    table?: GooglePrivacyDlpV2Table;
    /**
     * String data to inspect or redact.
     */
    value?: string;
}
