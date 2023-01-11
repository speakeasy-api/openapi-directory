package openapisdk.models.shared;


public enum AccountAccessAvailableAccountsEnum {
    ALL_ACCOUNTS("allAccounts"),
    ALL_ACCOUNTS_WITH_OWNER_NAME("allAccountsWithOwnerName");

    public final String value;

    private AccountAccessAvailableAccountsEnum(String value) {
        this.value = value;
    }
}
