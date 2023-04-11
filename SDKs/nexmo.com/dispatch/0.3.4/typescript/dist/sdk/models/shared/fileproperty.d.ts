import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileProperty extends SpeakeasyBase {
    /**
     * Additional text to accompany the image. Supported by WhatsApp and MMS.
     */
    caption?: string;
    /**
     * The URL of the file attachment. `messenger` supports a wide range of attachments including .zip, .csv and .pdf. `whatsapp` supports .pdf, .doc(x), .ppt(x) and .xls(x).
     */
    url?: string;
}
