import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Entry overview fields for rich text descriptions of entries.
 */
export declare class GoogleCloudDatacatalogV1EntryOverview extends SpeakeasyBase {
    /**
     * Entry overview with support for rich text. The overview must only contain Unicode characters, and should be formatted using HTML. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB.
     */
    overview?: string;
}
