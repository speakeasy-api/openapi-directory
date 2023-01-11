package openapisdk.models.shared;


public enum AccountAccessAllPsd2Enum {
    ALL_ACCOUNTS("allAccounts"),
    ALL_ACCOUNTS_WITH_OWNER_NAME("allAccountsWithOwnerName");

    public final String value;

    private AccountAccessAllPsd2Enum(String value) {
        this.value = value;
    }
}
