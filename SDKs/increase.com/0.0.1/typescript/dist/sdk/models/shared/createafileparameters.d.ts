import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateAFileParametersFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
/**
 * What the File will be used for in Increase's systems.
 */
export declare enum CreateAFileParametersPurposeEnum {
    CheckImageFront = "check_image_front",
    CheckImageBack = "check_image_back",
    FormSs4 = "form_ss_4",
    IdentityDocument = "identity_document",
    Other = "other",
    TrustFormationDocument = "trust_formation_document",
    DigitalWalletArtwork = "digital_wallet_artwork",
    DigitalWalletAppIcon = "digital_wallet_app_icon",
    EntitySupplementalDocument = "entity_supplemental_document"
}
export declare class CreateAFileParameters extends SpeakeasyBase {
    /**
     * The description you choose to give the File.
     */
    description?: string;
    /**
     * The file contents. This should follow the specifications of [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578) which defines file transfers for the multipart/form-data protocol.
     */
    file: CreateAFileParametersFile;
    /**
     * What the File will be used for in Increase's systems.
     */
    purpose: CreateAFileParametersPurposeEnum;
}
