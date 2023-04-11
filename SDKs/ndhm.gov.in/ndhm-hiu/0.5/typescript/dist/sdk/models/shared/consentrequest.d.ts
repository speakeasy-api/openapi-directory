import { SpeakeasyBase } from "../../../internal/utils";
import { CareContextDefinition } from "./carecontextdefinition";
import { HITypeEnumEnum } from "./hitypeenumenum";
import { Permission } from "./permission";
import { Requester } from "./requester";
import { UsePurpose } from "./usepurpose";
export declare class ConsentRequestConsentHip extends SpeakeasyBase {
    id: string;
}
export declare class ConsentRequestConsentHiu extends SpeakeasyBase {
    id: string;
}
export declare class ConsentRequestConsentPatient extends SpeakeasyBase {
    id: string;
}
export declare class ConsentRequestConsent extends SpeakeasyBase {
    careContexts?: CareContextDefinition[];
    hiTypes: HITypeEnumEnum[];
    hip?: ConsentRequestConsentHip;
    hiu: ConsentRequestConsentHiu;
    patient: ConsentRequestConsentPatient;
    permission: Permission;
    purpose: UsePurpose;
    requester: Requester;
}
export declare class ConsentRequest extends SpeakeasyBase {
    consent: ConsentRequestConsent;
    /**
     * a nonce, unique for each HTTP request.
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
