/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * ApkBinary - Represents the binary payload of an APK.
 */
public class ApkBinary {
    /**
     * A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.
     */
    
    public String sha1;

    public ApkBinary withSha1(String sha1) {
        this.sha1 = sha1;
        return this;
    }
    
    /**
     * A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command.
     */
    
    public String sha256;

    public ApkBinary withSha256(String sha256) {
        this.sha256 = sha256;
        return this;
    }
    
    public ApkBinary(){}
}
