import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImageProperty extends SpeakeasyBase {
    /**
     * Additional text to accompany the image. Supported by WhatsApp and MMS.
     */
    caption?: string;
    /**
     * The URL of the image attachment. `messenger` and `mms` supports .jpg, .jpeg, .png and .gif. `viber_service_msg` supports .jpg .jpeg, and .png. `whatsapp` supports .jpg .jpeg, and .png.
     */
    url?: string;
}
