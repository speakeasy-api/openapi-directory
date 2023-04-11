/**
 * Type of verification:
 *
 * @remarks
 * * dns - we look or a TXT record on the host you registered containing
 * `Probely=<verification_token>`
 * * file - on the root of the path you registered we look for a file
 * named `<verification token>` containing `Probely`.
 *
 */
export declare enum VerificationMethodEnum {
    Dns = "dns",
    File = "file"
}
