import { SpeakeasyBase } from "../../../internal/utils";
import { UserOwnedGrafeasNote, UserOwnedGrafeasNoteInput } from "./userownedgrafeasnote";
/**
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
 */
export declare class AttestorInput extends SpeakeasyBase {
    /**
     * Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.
     */
    description?: string;
    /**
     * Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.
     */
    etag?: string;
    /**
     * Required. The resource name, in the format: `projects/* /attestors/*`. This field may not be updated.
     */
    name?: string;
    /**
     * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
     */
    userOwnedGrafeasNote?: UserOwnedGrafeasNoteInput;
}
/**
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
 */
export declare class Attestor extends SpeakeasyBase {
    /**
     * Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.
     */
    description?: string;
    /**
     * Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154.
     */
    etag?: string;
    /**
     * Required. The resource name, in the format: `projects/* /attestors/*`. This field may not be updated.
     */
    name?: string;
    /**
     * Output only. Time when the attestor was last updated.
     */
    updateTime?: string;
    /**
     * An user owned Grafeas note references a Grafeas Attestation.Authority Note created by the user.
     */
    userOwnedGrafeasNote?: UserOwnedGrafeasNote;
}
