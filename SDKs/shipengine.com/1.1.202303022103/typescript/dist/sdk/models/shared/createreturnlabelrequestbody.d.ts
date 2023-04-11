import { SpeakeasyBase } from "../../../internal/utils";
import { LabelChargeEventEnum } from "./labelchargeeventenum";
/**
 * The display format that the label should be shown in.
 */
export declare enum CreateReturnLabelRequestBodyDisplaySchemeEnum {
    Label = "label",
    QrCode = "qr_code",
    LabelAndQrCode = "label_and_qr_code"
}
/**
 * There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):
 *
 * @remarks
 *
 * |Label Download Type | Description
 * |--------------------|------------------------------
 * |`url`               |You will receive a URL, which you can use to download the label in a separate request. The URL will remain valid for 90 days.<br><br>This is the default if `label_download_type` is unspecified.
 * |`inline`            |You will receive the Base64-encoded label as part of the response. No need for a second request to download the label.
 *
 */
export declare enum CreateReturnLabelRequestBodyLabelDownloadTypeEnum {
    Url = "url",
    Inline = "inline"
}
/**
 * The possible file formats in which shipping labels can be downloaded.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
 *
 * @remarks
 *
 * |Label Format  | Supported Carriers
 * |--------------|-----------------------------------
 * |`pdf`         | All carriers
 * |`png`         | `fedex` <br> `stamps_com` <br> `ups` <br> `usps`
 * |`zpl`         | `access_worldwide` <br> `apc` <br> `asendia` <br> `dhl_global_mail` <br> `dhl_express` <br> `dhl_express_australia` <br> `dhl_express_canada` <br> `dhl_express_worldwide` <br> `dhl_express_uk` <br> `dpd` <br> `endicia` <br> `fedex` <br> `fedex_uk` <br> `firstmile` <br> `imex` <br> `newgistics` <br> `ontrac` <br> `rr_donnelley` <br> `stamps_com` <br> `ups` <br> `usps`
 *
 */
export declare enum CreateReturnLabelRequestBodyLabelFormatEnum {
    Pdf = "pdf",
    Png = "png",
    Zpl = "zpl"
}
/**
 * The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
 *
 * @remarks
 *
 */
export declare enum CreateReturnLabelRequestBodyLabelLayoutEnum {
    Fourx6 = "4x6",
    Letter = "letter"
}
/**
 * A create return label request body
 */
export declare class CreateReturnLabelRequestBody extends SpeakeasyBase {
    /**
     * The label charge event.
     *
     * @remarks
     *
     */
    chargeEvent?: LabelChargeEventEnum;
    /**
     * The display format that the label should be shown in.
     */
    displayScheme?: CreateReturnLabelRequestBodyDisplaySchemeEnum;
    labelDownloadType?: CreateReturnLabelRequestBodyLabelDownloadTypeEnum;
    /**
     * The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.
     *
     * @remarks
     *
     */
    labelFormat?: CreateReturnLabelRequestBodyLabelFormatEnum;
    /**
     * The label image resource that was used to create a custom label image.
     */
    labelImageId?: string;
    /**
     * The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.
     *
     * @remarks
     *
     */
    labelLayout?: CreateReturnLabelRequestBodyLabelLayoutEnum;
}
