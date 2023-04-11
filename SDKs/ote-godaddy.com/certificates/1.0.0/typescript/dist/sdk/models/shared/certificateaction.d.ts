import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CertificateActionTypeEnum {
    CertificateIssued = "CERTIFICATE_ISSUED",
    CertificateOrderCanceled = "CERTIFICATE_ORDER_CANCELED",
    CertificateOrderCreated = "CERTIFICATE_ORDER_CREATED",
    CertificateRevoked = "CERTIFICATE_REVOKED",
    DomainValidationComplete = "DOMAIN_VALIDATION_COMPLETE",
    FraudDetected = "FRAUD_DETECTED",
    OrgNameChange = "ORG_NAME_CHANGE",
    OrgValidationComplete = "ORG_VALIDATION_COMPLETE",
    SanDrop = "SAN_DROP"
}
export declare class CertificateAction extends SpeakeasyBase {
    /**
     * Date action created
     */
    createdAt: string;
    type: CertificateActionTypeEnum;
}
