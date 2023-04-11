import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to retrieve gift cards by their GANs.
 */
export declare class RetrieveGiftCardFromGANRequest extends SpeakeasyBase {
    /**
     * The gift card account number (GAN) of the gift card to retrieve.
     *
     * @remarks
     * The maximum length of a GAN is 255 digits to account for third-party GANs that have been imported.
     * Square-issued gift cards have 16-digit GANs.
     */
    gan: string;
}
