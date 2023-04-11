/**
 * A list of products that an institution can support. All Items must be initialized with at least one product. The Balance product is always available and does not need to be specified during initialization.
 */
export declare enum ProductsEnum {
    Assets = "assets",
    Auth = "auth",
    Balance = "balance",
    Identity = "identity",
    Investments = "investments",
    Liabilities = "liabilities",
    PaymentInitiation = "payment_initiation",
    IdentityVerification = "identity_verification",
    Transactions = "transactions",
    CreditDetails = "credit_details",
    Income = "income",
    IncomeVerification = "income_verification",
    DepositSwitch = "deposit_switch",
    StandingOrders = "standing_orders",
    Transfer = "transfer",
    Employment = "employment",
    RecurringTransactions = "recurring_transactions"
}
