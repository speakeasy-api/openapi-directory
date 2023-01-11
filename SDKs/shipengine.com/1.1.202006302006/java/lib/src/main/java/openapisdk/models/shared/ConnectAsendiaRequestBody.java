package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConnectAsendiaRequestBody
 * An Asendia account information request body
**/
public class ConnectAsendiaRequestBody {
    @JsonProperty("account_number")
    public String accountNumber;
    public ConnectAsendiaRequestBody withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("ftp_password")
    public String ftpPassword;
    public ConnectAsendiaRequestBody withFtpPassword(String ftpPassword) {
        this.ftpPassword = ftpPassword;
        return this;
    }
    @JsonProperty("ftp_username")
    public String ftpUsername;
    public ConnectAsendiaRequestBody withFtpUsername(String ftpUsername) {
        this.ftpUsername = ftpUsername;
        return this;
    }
    @JsonProperty("nickname")
    public String nickname;
    public ConnectAsendiaRequestBody withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}