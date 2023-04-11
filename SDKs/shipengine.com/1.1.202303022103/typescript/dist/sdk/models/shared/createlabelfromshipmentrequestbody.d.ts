import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDownloadTypeEnum } from "./labeldownloadtypeenum";
import { ValidateAddressEnum } from "./validateaddressenum";
/**
 * The display format that the label should be shown in.
 */
export declare enum CreateLabelFromShipmentRequestBodyDisplaySchemeEnum {
    Label = "label",
    QrCode = "qr_code",
    LabelAndQrCode = "label_and_qr_code"
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
export declare enum CreateLabelFromShipmentRequestBodyLabelFormatEnum {
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
export declare enum CreateLabelFromShipmentRequestBodyLabelLayoutEnum {
    Fourx6 = "4x6",
    Letter = "letter"
}
/**
 * A purchase label without shipment request body
 */
export declare class CreateLabelFromShipmentRequestBody extends SpeakeasyBase {
    /**
     * The display format that the label should be shown in.
     */
    displayScheme?: CreateLabelFromShipmentRequestBodyDisplaySchemeEnum;
    labelDownloadType?: LabelDownloadTypeEnum;
    labelFormat?: CreateLabelFromShipmentRequestBodyLabelFormatEnum;
    labelLayout?: CreateLabelFromShipmentRequestBodyLabelLayoutEnum;
    validateAddress?: ValidateAddressEnum;
}
