import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RemittanceInformationStructuredSCORorQRRorIPIEnum {
    Scor = "SCOR",
    Qrr = "QRR",
    Ipi = "IPI"
}
/**
 * Structured remittance information.
 *
 * @remarks
 *
 */
export declare class RemittanceInformationStructured extends SpeakeasyBase {
    scoRorQRRorIPI?: RemittanceInformationStructuredSCORorQRRorIPIEnum;
    additionalRemittanceInformation?: string;
    reference: string;
    referenceIssuer?: string;
    referenceType?: string;
}
