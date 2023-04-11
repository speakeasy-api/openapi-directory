import { SpeakeasyBase } from "../../../internal/utils";
import { PrinterModel } from "./printermodel";
/**
 * Response for listing allowed printer models.
 */
export declare class ListPrinterModelsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time.
     */
    printerModels?: PrinterModel[];
}
