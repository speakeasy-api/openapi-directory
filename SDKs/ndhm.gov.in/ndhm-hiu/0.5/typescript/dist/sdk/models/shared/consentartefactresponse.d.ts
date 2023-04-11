import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentManagerPatientID } from "./consentmanagerpatientid";
import { ConsentStatusEnum } from "./consentstatusenum";
import { ErrorT } from "./error";
import { HITypeEnumEnum } from "./hitypeenumenum";
import { Permission } from "./permission";
import { Requester } from "./requester";
import { RequestReference } from "./requestreference";
import { UsePurpose } from "./usepurpose";
export declare class ConsentArtefactResponseConsentConsentDetailCareContexts extends SpeakeasyBase {
    careContextReference: string;
    patientReference: string;
}
export declare class ConsentArtefactResponseConsentConsentDetailConsentManager extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtefactResponseConsentConsentDetailHip extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtefactResponseConsentConsentDetailHiu extends SpeakeasyBase {
    id: string;
}
export declare class ConsentArtefactResponseConsentConsentDetail extends SpeakeasyBase {
    careContexts: ConsentArtefactResponseConsentConsentDetailCareContexts[];
    consentId: string;
    consentManager: ConsentArtefactResponseConsentConsentDetailConsentManager;
    createdAt: Date;
    hiTypes: HITypeEnumEnum[];
    hip: ConsentArtefactResponseConsentConsentDetailHip;
    hiu: ConsentArtefactResponseConsentConsentDetailHiu;
    patient: ConsentManagerPatientID;
    permission: Permission;
    purpose: UsePurpose;
    requester: Requester;
    schemaVersion?: string;
}
export declare class ConsentArtefactResponseConsent extends SpeakeasyBase {
    consentDetail: ConsentArtefactResponseConsentConsentDetail;
    signature: string;
    status: ConsentStatusEnum;
}
export declare class ConsentArtefactResponse extends SpeakeasyBase {
    consent?: ConsentArtefactResponseConsent;
    error?: ErrorT;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
